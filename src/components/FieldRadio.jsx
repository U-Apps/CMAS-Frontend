/* eslint-disable react/prop-types */
const FieldRadio = ({ label, options, register, errors, name, value }) => (
  <fieldset className="mb-4 text-right">
    <legend className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </legend>
    <div className="flex flex-col space-y-2">
      {options.map((option, idx) => (
        <label key={idx} className="flex items-center justify-end gap-2">
          <span className="mb-1">{option}</span>
          <input
            type="radio"
            value={option}
            {...register(name)}
            defaultChecked={value === option}
          />
        </label>
      ))}
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600">{errors[name]?.message}</p>
      )}
    </div>
  </fieldset>
);

export default FieldRadio;
