export default function Item({item}) {
  return (
    <div>
      <ul className="bg-slate-900 p-2 max-w-sm mb-3">
        <li className="text-xl font-bold">{item.name}</li>
        <li>Buy {item.quantity} in {item.category}</li>
      </ul>
    </div>
  )
}