import Form from "../../components/Form"
import Navbar from "../../components/Navbar"
import React, { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from "react-router-dom"; // Add this import



function EditProduct() {
    const {id} = useParams()

    return (
        <>
        <Navbar/>
        <Form type="Edit" id={id} />
        </>
    )
}
export default EditProduct