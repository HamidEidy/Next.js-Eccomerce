export interface Branch {
    location: [number, number];
    title: string;
    description: string;
    href: string;
}
export interface MenuProps {
    searchParams: string;
}
export interface returnAction {
    type: string,
    payload?: any | string | number,
}
export interface state {
    cart: CartItem[]
}
export interface ParamType {
    slug: string;
}
export interface CartItem {
    category: string;
    category_id: number;
    date_on_sale_from: null | string;
    date_on_sale_from_jalali: null | string;
    date_on_sale_to: null | string;
    date_on_sale_to_jalali: null | string;
    description: string;
    id: number;
    images: [];
    is_sale: boolean;
    name: number;
    price: number;
    primary_image: string;
    quantity: number;
    sale_price: number;
    slug: string;
    status: string;
    status_value: number;
    qty: number
}
export interface RequestObject {
    cookies: any;
    geo: Record<string, any>;
    ip: undefined | string;
    nextUrl: {
        href: string;
        origin: string;
        protocol: string;
        username: string;
        password: string;
        host: string;
        hostname: string;
        port: string;
        pathname: string;
        search: string;
        searchParams: URLSearchParams;
        hash: string;
    };
    url: string;
    bodyUsed: boolean;
    cache: string;
    credentials: string;
    destination: string;
    headers: Record<string, string>;
    integrity: string;
    keepalive: boolean;
    method: string;
    mode: string;
    redirect: string;
    referrer: string;
    referrerPolicy: string;
    signal: AbortSignal;
}
export interface Address {
    id: number;
    title: string;
    address: string;
    cellphone: string;
    postal_code: string;
    user_id: number;
    province_id: number;
    city_id: number;
    deleted_at: null | string;
    created_at: string;
    updated_at: string;
}
export interface User {
    cellphone: string;
    created_at: string;
    email: string | null;
    id: number;
    name: string | null;
}
export interface category {
    id: number,
    parent_id: number,
    name: string,
    description: string

}
export interface paginationLinks {
    active: boolean,
    label: string,
    url: string
}