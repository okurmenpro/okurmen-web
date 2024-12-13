import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const WorkListingPage = () => {
	const [product, setProduct] = useState({})
	const { id } = useParams()
	const navigate = useNavigate()


	useEffect(() => {
		const getProduct = async () => {
			try {
				const { data } = await axios.get(`http://127.0.0.1:8000/master-classes/${id}/`)
				setProduct(data)
			} catch (error) {
				console.log('Ошибка', error)
			}
		}
		getProduct()
	}, [])



	return (
		<div className='container'>
			<button onClick={() => navigate(-1)}>back назад</button>
			<h1 className='text-4xl text-red-700 font-semibold'>{product.title}</h1>
		</div>
	)
}
