
function Loader() {
  return (
    <div className="mt-6 flex items-center justify-center gap-3 text-slate-600">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900"></div>
      <span className="text-sm font-medium">Loading...</span>
    </div>
  )
}

export default Loader