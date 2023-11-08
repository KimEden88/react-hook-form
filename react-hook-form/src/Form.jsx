import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(watch('firstName'));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="First Name"
        {...register('firstName', { required: true })}
      />
      {errors.firstName && (
        <span style={{ color: 'red' }}>This field is required</span>
      )}
      <input
        {...register('lastName', { required: true })}
        placeholder="Last Name"
      />
      {errors.lastName && (
        <span style={{ color: 'red' }}>This field is required</span>
      )}
      <input
        type="submit"
        className="btn"
      />
    </form>
  );
};

export default Form;
