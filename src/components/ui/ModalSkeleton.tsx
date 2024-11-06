
const ModalSkeleton = () => {
  /**
        |--------------------------------------------------
        | Loading skeleton for the modal when data is loading
        |--------------------------------------------------
        */
        return (
            <div className="p-6 animate-pulse">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-700 rounded-full w-14 h-14"></div>
                <div>
                  <div className="h-6 bg-gray-700 rounded w-32 mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-20"></div>
                </div>
              </div>
        
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-gray-700/30 rounded-lg p-4">
                    <div className="h-4 bg-gray-700 rounded w-24 mb-2"></div>
                    <div className="h-6 bg-gray-700 rounded w-32"></div>
                  </div>
                ))}
              </div>
        
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-700/30 rounded-lg p-4">
                    <div className="h-4 bg-gray-700 rounded w-20 mb-2"></div>
                    <div className="h-6 bg-gray-700 rounded w-24"></div>
                  </div>
                ))}
              </div>
        
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg"
                  >
                    <div className="h-4 bg-gray-700 rounded w-32"></div>
                    <div className="h-4 bg-gray-700 rounded w-40"></div>
                  </div>
                ))}
              </div>
            </div>
          );
};

export default ModalSkeleton;