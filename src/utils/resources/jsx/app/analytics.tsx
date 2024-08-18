import type { FC } from 'hono/jsx'

const Analytics: FC<{ data: Map<string, any> }> = ({ data }) => {
    const arry = Array.from(data.entries())
    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
                {arry.length > 0 ? arry.map(([key, value]) => (
                    <div key={key} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800">{key}</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            <span className="font-medium">Opened:</span> {value.opened ? 'Yes' : 'No'}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                            <span className="font-medium">Opened Times:</span> {value.opened_times}
                        </p>
                    </div>
                ))
                    :
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800">No data</h3>
                    </div>
                }
            </div>
        </div>
    )
}

export default Analytics
