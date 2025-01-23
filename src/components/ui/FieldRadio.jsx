/* eslint-disable react/prop-types */
const FieldRadio = ({ label, options, register, errors, name }) => (
  <fieldset className="mb-4 text-right">
    <legend className="block text-sm font-medium text-gray-700 mb-1 text-right">
      {label}
    </legend>
    <div className="flex flex-col space-y-2">
      {options.map((option, idx) => (
        <label key={idx}>
          <input type="radio" value={option} {...register(name)} />
          <span>{option}</span>
        </label>
      ))}
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600">{errors[name]?.message}</p>
      )}
    </div>
  </fieldset>
);

export default FieldRadio;
