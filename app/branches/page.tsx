'use client'
import BranchCard from "@/components/branches/BranchesCard";
import { Branch } from "@/interfaces";
const Branches = (): JSX.Element => {
    const branches: Branch[] = [
        { location: [35.807190, 51.428987], title: 'تهران، تجریش', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.', href: 'https://maps.app.goo.gl/VX46nuFLzZ1BGH4E8' },
        { location: [35.697961, 51.351151], title: 'تهران، آزادی', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.' , href: 'https://maps.app.goo.gl/w8wzkC76K5yqEGmT8' },
        { location: [35.856968, 50.972541], title: 'کرج، گوهردشت', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.', href: 'https://maps.app.goo.gl/UA9RPXWr1g42HxyW7'  },
        { location: [32.638031, 51.683974], title: 'اصفهان، خواجو', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.' , href: 'https://maps.app.goo.gl/kEZxBXfVZSuZVH1k6' },
    ];

    return (
        <section className="container text-center mt-3">
            <h3 className='py-4 mb-3 spaceBg'>لیست شعبه های فعال</h3>
            <div className="row justify-content-center g-1">
                {branches.map((branch, index:number) => (
                    <div className="col-lg-5 col-sm-12 m-1" key={index}>
                        <BranchCard {...branch} />
                    </div>))
                }
            </div>
        </section>
    )
}
export default Branches;