export default function InputBox({ type, name, placeholder, className, ...props }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name} className="text-sm mb-2 dark:text-white">
        {name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`border w-full text-sm pl-3 rounded-md focus:outline-none py-3 placeholder:text-black dark:placeholder:opacity-70 placeholder:text-opacity-40 dark:bg-grey dark:text-white focus:border focus:border-blue dark:placeholder:text-white`}
        {...props}
      />
    </div>
  );
}
