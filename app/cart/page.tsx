
import Address from "@/components/cart/Address"
import Layout from "@/components/cart/layout"
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}
const cartRoute: React.FC = () => {
    return (
        <Layout>
            <Address />
        </Layout>
    )
}

export default cartRoute