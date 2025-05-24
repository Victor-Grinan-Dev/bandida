const TransparentSection = ({ children, className }) => {
  return (
    <section className={`transparent-section ${className}`}>{children}</section>
  )
}

export default TransparentSection;