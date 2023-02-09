import { Head } from "@inertiajs/react";

const EditOffer = ({ offer }) => {
  console.log(offer);
  return (
    <>
    <Head title="Edit"/>
      <div>
        <p>Tutaj treść</p>
        {offer.title}
      </div>
    </>
  );
};

export default EditOffer;
