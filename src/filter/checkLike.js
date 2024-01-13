import { useSelector } from "react-redux"


export const checkLike = (product) => {
    const likeData = useSelector((state) => state.like.data)

    const found = likeData.find(i => i.id === product.id)
    if (found) {
        return true
    } else {
        return false
    }
}