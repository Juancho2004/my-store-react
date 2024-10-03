import { useState } from "react"

export function useLogic(product) {
  const [showModal, setShowModal] = useState(false);
  const [showModalCart, setShowModalCart] = useState(false);

  let length = product.length;

  const handleShowModal = ()  =>{
    setShowModal(true)
  }

  const handleCloseShowModal = ()  =>{
    setShowModal(false)
  }
  const handleShowModalCart = ()  =>{
    setShowModalCart(true)
  }

  const handleCloseShowModalCart = ()  =>{
    setShowModalCart(false)
  }
    return{handleShowModal, handleCloseShowModal, showModal, handleShowModalCart, handleCloseShowModalCart, showModalCart, length}
}
