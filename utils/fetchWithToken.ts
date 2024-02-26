import { cookies } from "next/headers";
class APIManager {
    private static baseUrl = "";
    private static token = cookies().get('token')?.value;
    private static async fetchData(url: string, method: string, body?: any): Promise<any> {
        const options: RequestInit = {
            method: method,
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${APIManager.token}`
            }
        };
        if (body) {
            options.body = JSON.stringify(body);
        }
        const response = await fetch(`${APIManager.baseUrl}${url}`, options);
      return await response.json();
        
       
    }
    public static async getClientProfileData(url: string): Promise<any> {
        return await APIManager.fetchData(url, 'GET');
    }

    public static async editClientProfile(url: string, body: any): Promise<any> {
        return await APIManager.fetchData(url, 'POST', body);
    }

    public static async checkOtp(url: string, body: any): Promise<any> {
        return await APIManager.fetchData(url, 'POST', body);
    }

    public static async getOrders(url: string): Promise<any> {
        return await APIManager.fetchData(url, 'GET');
    }

    public static async deleteUserAddress(url: string, id: number): Promise<any> {
        return await APIManager.fetchData(url, 'POST', id);
    }

    public static async authChecker(url: string): Promise<any> {
        return await APIManager.fetchData(url, 'POST');
    }

    public static clientLogOut(): void {
        cookies().delete('token');
    }
}
export default APIManager;