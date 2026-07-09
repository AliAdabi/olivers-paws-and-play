function Paw({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <ellipse cx="30" cy="40" rx="16" ry="13" fill={color} />
      <ellipse cx="13" cy="23" rx="7" ry="9" fill={color} />
      <ellipse cx="25" cy="15" rx="7" ry="9" fill={color} />
      <ellipse cx="38" cy="15" rx="7" ry="9" fill={color} />
      <ellipse cx="49" cy="23" rx="7" ry="9" fill={color} />
    </svg>
  );
}

export default Paw;