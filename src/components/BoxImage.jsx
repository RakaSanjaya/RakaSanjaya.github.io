function Boximage({ key, image, title, desc, icon }) {
  return (
    <div
      className="flex box-border p-3 flex-col bg-whiteDeep dark:bg-grey bg-opacity-40 mx-1 mb-6 rounded-xl shadow-md"
      data-aos="flip-right"
      data-aos-delay="500"
      data-aos-duration="800"
      data-aos-easing="ease-out"
      id={key}>
      <img src={`/public/projects/${image}`} alt={image} className="rounded-t-lg rounded-b-md" />
      <h1 className="font-bold mt-2 dark:text-white">{title}</h1>
      <p className="text-xs text-greylighten dark:text-white">{desc}</p>
      <hr className="my-2 border-greylighten dark:border-whiteDeep opacity-30 " />
      <div className="flex gap-x-2">
        {icon.map((el, index) => {
          return <img key={index} src={`/public/logo/${el}`} alt={el} className="w-5 md:w-7" />;
        })}
      </div>
    </div>
  );
}

export default Boximage;
