import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'

const PurchaseOrderPage: NextPage = () => {

  return (
    <Layout>
      <div className='flex flex-column'>
        <div className='font-bold text-2xl text-gray-700'>
          Purchase Order
        </div>
      </div>
    </Layout>
  )
}

export default PurchaseOrderPage
