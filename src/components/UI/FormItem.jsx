import "./FormItem.scss";

function FormItem({ children, label, htmlFor, advice, error }) {
  // Intialisation ----------------------------------------------
  // State ------------------------------------------------------
  // Handlers ---------------------------------------------------
  // View -------------------------------------------------------
  return (
    <div className="FormItem">
      <label className="FormLabel" htmlFor={htmlFor}>
        {label}
      </label>
      {advice && <p className="FormAdvice">{advice}</p>}
      {children}
      {error && <p className="FormError">{error}</p>}
    </div>
  );
}

export default FormItem;
