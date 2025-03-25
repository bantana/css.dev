import "./LoginForm.css";
export default function LoginForm() {
  return (
    <form action="">
      <h2>login</h2>
      <div>
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="text" />
      </div>
      <button>Login</button>
    </form>
  );
}
