'use server'
import { postFetch } from "@/utils/fetch";
import APIManager from "@/utils/fetchWithToken";
import { handleError } from "@/utils/helper";
import { cookies } from "next/headers";
type ResendOtpFormData = {};
type User = {
    // define your user type here
};
type ApiResponse<T> = {
    user?: object;
    status: string;
    message: string;
    data?: T;
};
const login = async (stateLogin: object, formData: FormData | any): Promise<ApiResponse<User>> => {
    const cellphone = formData.get('cellphone');
    if (cellphone === '') {
        return {
            status: 'error',
            message: "شماره تماس را وارد کنید"
        }
    }
    const pattern = /^(\+98|0)?9\d{9}$/;
    if (!pattern.test(cellphone)) {
        return {
            status: 'error',
            message: "شماره تماس صحیح نیست"
        }
    }
    try {
        const data = await postFetch('/auth/login', { cellphone });
        if (data.status === 'success') {
            cookies().set({
                name: 'login_token',
                value: data.data.login_token,
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7, // 1 week
                path: '/'
            });
            return {
                status: 'send-otp',
                message: 'کد ورود برای شما ارسال شد',
            };
        } else {
            return {
                status: data.status,
                message: handleError(data.message),
            };
        }
    } catch (error) {
        console.error(error);
        return {
            status: 'error',
            message: 'خطایی رخ داده است. لطفا دوباره تلاش کنید.'
        };
    }

}
const checkOtp = async (stateOtp: number, formData: FormData): Promise<ApiResponse<User>> => {
    try {
        const otp = formData.get('otp');
        const logintoken = cookies().get('login_token');
        const login_token = logintoken?.value;
        const data = await postFetch('/auth/check-otp', { otp, login_token });
        if (data.status === 'success') {
            cookies().delete({
                name: 'login_token',
                path: '/',
            });
            cookies().set({
                name: 'token',
                value: data.data.token,
                path: '/'
            });
            return {
                status: 'checked-otp',
                message: 'ورود موفقیت آمیز بود',
                data: data.data.user
            };
        } else {
            return {
                status: data.status,
                message: handleError(data.message),
            };
        }
    } catch (error) {
        console.error(error);
        return {
            status: 'error',
            message: 'خطایی رخ داده است. لطفا دوباره تلاش کنید.'
        };
    }
}
const resendOtp = async (stateResendOtp: null, formData: ResendOtpFormData): Promise<ApiResponse<undefined>> => {
    try {
        const login_token = cookies().get('login_token');
        if (!login_token) {
            return {
                status: 'error',
                message: 'یکبار دیگر تلاش کنید'
            };
        }
        const data = await postFetch('/auth/resend-otp', { login_token: login_token.value });
        if (data.status === 'success') {
            cookies().set({
                name: 'login_token',
                value: data.data.login_token,
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7, // 1 week
                path: '/'
            });
            return {
                status: 'reSend-otp',
                message: 'کد ورود دوباره برای شما ارسال شد',
            };
        } else {
            return {
                status: data.status,
                message: handleError(data.message),
            };
        }
    } catch (error) {
        console.error(error);
        return {
            status: 'error',
            message: 'خطایی رخ داده است. لطفا دوباره تلاش کنید.'
        };
    }
}
const logOutUser = () => {
    APIManager.clientLogOut()
}
const me = async (): Promise<ApiResponse<object | { error: string }>> => {
    try {
        const token = cookies().get('token');
        if (!token) {
            return {
                status: 'error',
                message: 'Not Authorized !'
            };
        }
        const res = await APIManager.authChecker('/auth/me');
        if (res.status === 'success') {
            return {
                user: res.data,
                status: 'success',
                message: 'اطلاعات کاربر دریافت شد',
                // data: undefined
            };
        } else {
            return {
                status: 'error',
                message: 'An error occurred while fetching user data'
            };
        }
    } catch (error) {
        console.error(error);
        return {
            status: 'error',
            message: 'An error occurred while fetching user data'
        };
    }
}
export { login, checkOtp, logOutUser, me, resendOtp }