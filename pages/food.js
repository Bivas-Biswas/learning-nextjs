import Image from "next/image";
import img from '../public/1.jpg'

function FoodsPage() {
    return (
        <div>
            <Image src={img} quality={10} placeholder={'blur'} alt={'image'} width={'280px'} height={'420px'}/>
            {
                [...Array(5)].map((_, index) => (
                    <div key={index}>
                        <Image  src={`/${index + 1}.jpg`} alt={'image'} width={'280px'} height={'420px'}/>
                    </div>
                ))
            }
        </div>
    )
}

export default FoodsPage