export default function Item({name, quantity, category}) {
  return (
    <div>
      <ul className="bg-slate-900 p-2 max-w-sm mb-3">
        <li className="text-xl font-bold">{name}</li>
        <li>Buy {quantity} in {category}</li>
      </ul>
    </div>
  )
}