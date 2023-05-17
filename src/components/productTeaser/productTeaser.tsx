import { useEffect, useState } from "react"

import { ProductContainer, show, hide } from "./styled"
import ProductCard from "./ProductCard"
import {products} from '../../data/data.ts'

const ProductTeaser = () => {
  const [data, setData] = useState(products)
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextProduct = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0)
    }
  };

  useEffect(() => {
    setTimeout(() => {
      showNextProduct()
    }, 5000)
  }, [currentIndex])

  return (
    <ProductContainer>
      {
        data.map((p, idx) => {
          
          if(idx === currentIndex){
          return (
            <div key={p.id}>
                (<ProductCard {...p} />)
          </div>
            )
          } else {
            return undefined
          }
        }
        )
      }
  </ProductContainer>
  )
}

export default ProductTeaser