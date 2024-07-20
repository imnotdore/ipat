import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetchItems();
    } , []);
    const fetchItems = async () => {
    try {
        const response = await
        axios.get('http://localhost:8000/myapi/items/');
            setItems(response.data);
    } catch (error) {
    console.error('There was an error fetching the items!', error);
}
};
    return (
        <div>
        <h1>Items</h1>
        <ul>
            {items.map(item =>  ( 
            <li key={item.id}> {item.firstname} : {item.middlename} : 
            {item.lastname} : {item.Address} : {item.Barangay} : 
            {item.City} : {item.State} : {item.ZipCode} : 
            {item.Religion} : {item.Sex} : {item.Age} : 
            {item.Phone} : {item.Email}: {item.Student_No} : 
            {item.Height} : {item.Weight} : {item.Place_of_Birth} 
            {item.Date_of_Birth} : {item.Civil_Status} : {item.Course} : 
            {item.Year} : {item.Section} : {item.Department} :
            {item.Subject} : {item.Citizenship} 

        <button onClick={() => onEdit(item)}>Edit</button>
        <button onClick={() => onDelete(item.id)}>Delete</button>
            </li>
            ))}
        </ul>
    </div>
    );
};
export default ItemList;
   