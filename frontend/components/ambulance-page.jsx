import MarkAsRead from '@/logics/make-as-read'
import React from 'react'


const NotificationPage = () => {
  return (
    <div>
          <div className="w-full  p-16">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex justify-between space-x-2">
                        <h2 className="text-lg text-black font-semibold">Recent Orders</h2>
                        <div className="bg-green-500 text-white px-1  rounded-lg">6 new orders</div>
                      </div>
                    </div> 
                    <div className="space-y-4 ">
                  
                      <div className="flex px-2 bg-[#E8E6F9] gap-80 justify-between rounded-lg items-center">
                        <div className="py-4  space-y-2">
                          <p className="font-semibold text-sm text-black">
                            24 Moleye Street Yaba
                          </p>
                        <div className="text-gray-500 text-sm">Dec 12, 2023 at  10:13 AM</div>
                      </div>
                          <MarkAsRead />
                    </div>
                      
                      <div className="flex px-2 bg-[#E8E6F9] justify-between rounded-lg items-center">
                        <div className="py-4  space-y-2">
                          <p className="font-semibold text-sm text-black">
                            12 Queens street Alagomeji
                          </p>
                          <div className="text-gray-500 text-sm">Dec 11, 2023 at  09:10 AM</div>
                        </div>
                        <MarkAsRead />
                      </div>

                      <div className="flex px-2 bg-[#E8E6F9] justify-between rounded-lg items-center">
                        <div className="py-4 space-y-2">
                          <p className="font-semibold text-sm text-black">
                            sports complex unilag
                          </p>
                          <div className="text-gray-500 text-sm">Dec 04, 2023 at  13:38 PM</div>
                        </div>
                        <MarkAsRead />
                      </div>

                      <div className="flex px-2 bg-[#E8E6F9] gap-80 justify-between rounded-lg items-center">
                        <div className="py-4  space-y-2">
                          <p className="font-semibold text-sm text-black">
                            N0 18 ikorodu road fadeyi
                          </p>
                        <div className="text-gray-500 text-sm">Dec 12, 2023 at  10:13 AM</div>
                      </div>
                      <MarkAsRead />
                    </div>

                    <div className="flex px-2 bg-[#E8E6F9] justify-between rounded-lg items-center">
                        <div className="py-4  space-y-2">
                          <p className="font-semibold text-sm text-black">
                            34 Bode Thomas Surulere
                          </p>
                          <div className="text-gray-500 text-sm">Dec 11, 2023 at  09:10 AM</div>
                        </div>
                        <MarkAsRead />
                      </div>

                      <div className="flex px-2 bg-[#E8E6F9] justify-between rounded-lg items-center">
                        <div className="py-4 space-y-2">
                          <p className="font-semibold text-sm text-black">
                            13 ileje Bariga
                          </p>
                          <div className="text-gray-500 text-sm">Dec 04, 2023 at  13:38 PM</div>
                        </div>
                        <MarkAsRead />
                      </div>

                    </div>
            
                  </div>
    </div>
  )
}

export default NotificationPage