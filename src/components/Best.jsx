import react,{useContext} from 'react'
import {Data} from "./ApiData"
import Container from './Container'
const Best = () => {
    let {info} = useContext(Data)
  return (
    <div>
      <Container>
        <div className="">
            <h2 className="text-4xl text-center">Best Selling Products</h2>
        </div>
        <div className="">
            {info.map((item)=>(
                <div className="w-1/4">
                    <div className="">
                        <img className="w-full object-cover rounded-full shadow-xl bg-[#f6f7fb] p-5" src={item.thumbnail} alt={item.id} />
                    </div>
                    <div className="">
                        <h4 className="text-xl font-bold text-[#151875] text-center">{item.title.slice(0, 13)}</h4>
                        <div className="flex items-center gap-2 justify-center">
                            <p className='text-[#ff0073]'>{(item.price - (item.price * (item.discountPercentage / 100))).toFixed(0)}</p>
                            <p className='text-gray-500 line-through'>${item.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default Best
