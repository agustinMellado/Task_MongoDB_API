
function RegisterPage() {
  return (
    <div>
      {/* formulario */}
      <form
        onSubmit={handleSubmit((values)=>{
          console.log(values);
        })}>
        <input type="text" {...register("username",{ required: true})} />
        <input type="text" {...register("email",{ required: true})} />
        <input type="text" {...register("password",{ required: true})} />
        <button type="submit">Registrar</button>
      </form>
      
      
    </div>
  )
}

export default RegisterPage