import React from 'react'
import { Alert, Col, Form, Row } from 'react-bootstrap'
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getData, DeletePost, loginUser, CreateBlog } from '../Store/Actions'
import Button from '@restart/ui/esm/Button';
import { Upload } from 'antd';
import 'antd/dist/antd.css';
import ImgCrop from 'antd-img-crop';




const BlogCreate = () => {
	const userDataRedux = useSelector((state) => state);
	const dispatch = useDispatch()

	const [blogTitle, setBlogTitle] = useState("")
	const [blogDescription, setBlogDescription] = useState("")
	const [password, setPassword] = useState(null)
	const [checked, setChecked] = useState(false)
	const [error, setError] = useState("")
	const [fileList, setFileList] = useState([])

	const handleSubmit = async (e) => {
		e.preventDefault()
		let formData = new FormData();
		formData.append("image", fileList[0].originFileObj)
		await dispatch(CreateBlog({ image: formData, blogdata: { blogTitle, blogDescription } }))

	}
	const onPreview = async file => {
		let src = file.url;
		if (!src) {
			src = await new Promise(resolve => {
				const reader = new FileReader();
				reader.readAsDataURL(file.originFileObj);
				reader.onload = () => resolve(reader.result);
			});
		}
		const image = new Image();
		image.src = src;
		const imgWindow = window.open(src);
		imgWindow.document.write(image.outerHTML);
	};
	const onChange = ({ fileList: newFileList }) => {
		setFileList(newFileList);
	};
	console.log(fileList, "mmoishere")
	const dummyRequest = ({ file, onSuccess }) => {
		setTimeout(() => {
			onSuccess('ok')
		}, 0)
	}
	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Blog Title</Form.Label>
					<Form.Control onChange={(e) => { setBlogTitle(e.target.value) }} type="text" placeholder="Enter The Title" />
				</Form.Group>
				<ImgCrop rotate aspect={2 / 1}>
					<Upload
						multiple={false}
						customRequest={dummyRequest}
						listType="picture-card"
						onChange={onChange}
						onPreview={onPreview}

					>
						{fileList.length < 5 && '+ Upload'}
					</Upload>
				</ImgCrop>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="text" onChange={(e) => { setBlogDescription(e.target.value) }} placeholder="Description" />
				</Form.Group>
				{/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" onChange={(e) => { setChecked(e.target.checked) }} label="I agree to terms and conditions" />
				</Form.Group> */}
				{/* <Alert show={error} variant="danger">
					{error ? error : ""}
				</Alert> */}
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	)
}

export default BlogCreate
