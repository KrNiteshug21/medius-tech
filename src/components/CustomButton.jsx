const CustomButton = ({ obj, currState, setCurrState }) => {
  const isActive = currState.id === obj.id;

  return (
    <button
      onClick={() => setCurrState(obj)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-gray-400 text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-primary-green hover:shadow-[0_0_0_4px_inset] hover:text-primary-green h-12 px-6 py-3 w-auto ${
        isActive &&
        "shadow-accentBorderSecondary border-primary-green shadow-[0_0_0_4px_inset] text-primary-green"
      }`}
    >
      {obj.name}
    </button>
  );
};

export default CustomButton;
