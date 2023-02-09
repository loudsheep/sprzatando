import { useSelector } from "react-redux"

const EditOffer = () => {
    const offers = useSelector(state => state.offers.offers)
    console.log(offers)
}

export default EditOffer