import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ItemForm = ({ item, onSuccess }) => {
    const [firstname, setfirstname] = useState('');
    const [middlename, setmiddlename] = useState('');
    const [lastname, setlastname] = useState('');
    const [Address, setAddress] = useState('');
    const [Barangay, setBarangay] = useState('');
    const [City, setCity] = useState('');
    const [State, setState] = useState('');
    const [ZipCode, setZipCode] = useState('');
    const [Religion, setReligion] = useState('');
    const [Sex, setSex] = useState('');
    const [Age, setAge] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [Student_No, setStudent_No] = useState('');
    const [Height, setHeight] = useState('');
    const [Weight, setWeight] = useState('');
    const [Place_of_Birth, setPlace_of_Birth] = useState('');
    const [Date_of_Birth, setDate_of_Birth] = useState('');
    const [Civil_Status, setCivil_Status] = useState('');
    const [Course, setCourse] = useState('');
    const [Year, setYear] = useState('');
    const [Section, setSection] = useState('');
    const [Department, setDepartment] = useState('');
    const [Subject, setSubject] = useState('');
    const [Citizenship, setCitizenship] = useState('');
   

    useEffect(() => {
        if (item) {
        setfirstname(item.firstname);
        setmiddlename(item.middlename);
        setlastname(item.lastname);
        setAddress(item.Address);
        setBarangay(item.Barangay);
        setCity(item.City);
        setState(item.State);
        setZipCode(item.ZipCode);
        setReligion(item.Religion);
        setSex(item.Sex);
        setAge(item.Age);
        setPhone(item.Phone);
        setEmail(item.Email);
        setStudent_No(item.Student_No);
        setHeight(item.Height);
        setWeight(item.Weight);
        setPlace_of_Birth(item.Place_of_Birth);
        setDate_of_Birth(item.Date_of_Birth);
        setCivil_Status(item.Civil_Status);
        setCourse(item.Course);
        setYear(item.Year);
        setSection(item.Section);
        setDepartment(item.Department);
        setSubject(item.Subject);
        setCitizenship(item.Citizenship);
       
    }
    }, [item]);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { firstname, middlename, lastname, Address,Barangay,City,State, 
            ZipCode, Religion, Sex, Age, Phone, Email,Student_No, Height, Weight, Place_of_Birth, Date_of_Birth, Civil_Status,
        Course, Year, Section, Department, Subject, Citizenship,};
        try {
            if (item) {
                await
        axios.put(`http://localhost:8000/myapi/items/${item.id}/`, data);
        } else {
                await
        axios.post('http://localhost:8000/myapi/items/', data);
        }
        onSuccess();
    } catch (error) {
console.error('There was an error submitting the form!', error);
    }
};


    return (
    
    <form onSubmit={handleSubmit}>
    <div>
        <label>Firstname:</label>
            <input type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)} />
    </div>
    <div>
        <label>Middlename:</label>
            <input type="text" value={middlename} onChange={(e) => setmiddlename(e.target.value)} />
    </div>
    <div>
        <label>Lastname:</label>
            <input type="text" value={lastname} onChange={(e) => setlastname(e.target.value)} />
    </div>

    <div>
        <label>Address:</label>
            <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} />
    </div>
    <div>
        <label>Barangay:</label>
            <input type="text" value={Barangay} onChange={(e) => setBarangay(e.target.value)} />
    </div>
    <div>
        <label>City:</label>
            <input type="text" value={City} onChange={(e) => setCity(e.target.value)} />
    </div>
    <div>
        <label>State:</label>
            <input type="text" value={State} onChange={(e) => setState(e.target.value)} />
    </div>

    <div>
        <label>Zipcode:</label>
            <input type="text" value={ZipCode} onChange={(e) => setZipCode(e.target.value)} />
    </div>
    <div>
        <label>Religion:</label>
            <input type="text" value={Religion} onChange={(e) => setReligion(e.target.value)} />
    </div>
    <div>
        <label>Sex:</label>
            <input type="text" value={Sex} onChange={(e) => setSex(e.target.value)} />
    </div>

    <div>
        <label>Age:</label>
            <input type="text" value={Age} onChange={(e) => setAge(e.target.value)} />
    </div>
    <div>
        <label>Phone:</label>
            <input type="text" value={Phone} onChange={(e) => setPhone(e.target.value)} />
    </div>
    <div>
        <label>Email:</label>
            <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />
    </div>

    <div>
        <label>Student No:</label>
            <input type="text" value={Student_No} onChange={(e) => setStudent_No(e.target.value)} />
    </div>
    <div>
        <label>Height:</label>
            <input type="text" value={Height} onChange={(e) => setHeight(e.target.value)} />
    </div>
    <div>
        <label>Weight:</label>
            <input type="text" value={Weight} onChange={(e) => setWeight(e.target.value)} />
    </div>
    <div>
        <label>Place of Birth:</label>
            <input type="text" value={Place_of_Birth} onChange={(e) => setPlace_of_Birth(e.target.value)} />
    </div>
        
    <div>
        <label>Date of Birth:</label>
            <input type="text" value={Date_of_Birth} onChange={(e) => setDate_of_Birth(e.target.value)} />
    </div>
    <div>
        <label>Civil Status:</label>
            <input type="text" value={Civil_Status} onChange={(e) => setCivil_Status(e.target.value)} />
    </div>

    <div>
        <label>Course:</label>
            <input type="text" value={Course} onChange={(e) => setCourse(e.target.value)} />
    </div>
    <div>
        <label>Year:</label>
            <input type="text" value={Year} onChange={(e) => setYear(e.target.value)} />
    </div>
    <div>
        <label>Section:</label>
            <input type="text" value={Section} onChange={(e) => setSection(e.target.value)} />
    </div>
    <div>
        <label>Department:</label>
            <input type="text" value={Department} onChange={(e) => setDepartment(e.target.value)} />
    </div>
    <div>
        <label>Subject:</label>
            <input type="text" value={Subject} onChange={(e) => setSubject(e.target.value)} />
    </div>

    <div>
        <label>Citizenship:</label>
            <input type="text" value={Citizenship} onChange={(e) => setCitizenship(e.target.value)} />
    </div>
    
        <button type="submit">Submit</button>
        </form>
    );
};
export default ItemForm;