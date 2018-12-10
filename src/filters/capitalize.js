export default function(s) {
    if (!s) return '';
    s = s.toString();
    return s.charAt(0).toUpperCase() + s.slice(1);
}