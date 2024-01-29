

const Card = ({imageURL, title}) => {
  return (
<div className=" max-h-[400px] rounded-xl m-4 w-full">
    <h1 className="text-4xl font-bold m-6">{title}</h1>
    <img src={imageURL} alt={title} className="w-full h-auto max-h-[400px] object-cover rounded-xl"/>
</div>
  )
}

export default Card
