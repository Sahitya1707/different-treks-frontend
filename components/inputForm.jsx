const InputForm = (props) => {
  const { name, placeholder } = props;
  return (
    <div
      className="  lg:my-0
                  my-4"
    >
      <p className="text-sm text-[#a3a1a1]">{name}</p>
      <input
        type="text"
        placeholder={`${placeholder}`}
        className="text-[black] border-b-2 border-[black] lg:py-1 lg:px-3
                  focus:border-[#83a6adf8] transition-all duration-100 ease-out
                  outline-none 
                  w-[100%]
                  lg:my-0
                  my-1
                  bg-[#ff000000]
                
                  "
      />
    </div>
  );
};
export default InputForm;
