'use client'

import Modal from "@/app/components/modals/Modal"
import Image from "next/image"

interface ImageModalProps{
  isOpen?: boolean
  src?: string | null
  onClose: () => void
}
const ImageModal: React.FC<ImageModalProps> = ({
  src,
  isOpen,
  onClose
}) => {
  if(!src){
    return null
  }

  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image 
          src={src}
          alt="Image"
          className="object-cover"
          fill
        />
      </div>
    </Modal>
  )
}

export default ImageModal