/* eslint-disable react/prop-types */
const FieldInput = ({
  id,
  label,
  type = 'text',
  register,
  errors,
  placeholder,
}) => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1 text-right"
    >
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      {...register(id)}
      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-right"
      placeholder={placeholder}
    />
    {errors[id] && (
      <p className="mt-2 text-sm text-red-600">{errors[id]?.message}</p>
    )}
  </div>
);

export default FieldInput;
