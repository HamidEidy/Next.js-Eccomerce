'use client'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Card from "../card/Card";
const TabProduct = ({ tabPanel, tabList }: any) => {
    return (
        <>
            <Tabs selectedTabClassName={'btn-warning'}>
                <ul className="filters_menu">
                    <TabList className={'d-sm-flex d-lg-block row me-lg-5'}>
                        {tabList.map((items: any, index: number) => (

                            <Tab className="me-4 tabs btn rounded col-sm-12 py-sm-1" key={index}>{items}</Tab>
                        ))}
                    </TabList>
                </ul>
                <div className="slider-container">
                    {tabPanel.map((panel: any, index: number) => (
                        <TabPanel key={index}>
                            <div className="row">
                                {panel.slice(0, 4).map((product: any) => (
                                    <div key={product.id} className="col-lg-3 col-sm-6 mb-sm-3 py-2">
                                        <Card product={product} />
                                    </div>
                                ))}

                            </div>
                        </TabPanel>
                    ))}

                </div>

            </Tabs>
        </>
    )
}
export default TabProduct;