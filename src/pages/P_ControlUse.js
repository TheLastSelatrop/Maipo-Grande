import React, { Component, useState, useEffect, useRef } from "react";
import { agregarProductor, obtenerProductores } from '../helpers/getAdmin';
import Background from "../assets/DifCol.png"


const UserControlPage = () => {
    const [productores, setProductores] = useState([]);
    const [activeModal, setActiveModal] = useState(false);
    const [alerta, setAlerta] = useState({msg:'', error:false})
    const [formValues, setFormValues] = useState({nombre: '', correo: '', password: ''});
    const {nombre, correo , password} = formValues;
    useEffect(() => {
        const cargarProductores = async()=>{
          const respuesta = await obtenerProductores();
          console.log(respuesta)
          setProductores(respuesta);
        }
    
        cargarProductores();
      },[] )

      const onChange = ({target}) =>{
        setFormValues({
          ...formValues,
          [target.name] : target.value
        });
      }
      const activateModal = () =>{
        setActiveModal(true);
      }

      const closeModal = () =>{
        setActiveModal(false)
      }

      const handleAgregarProductor = async(e) =>{
        e.preventDefault();
        if([correo, password, nombre].includes('')){
          setAlerta({error: true, msg:'Todos los campos son obligatorios'});
          setTimeout(() => {
            setAlerta({error: false, msg:''})
          }, 2000);
          return
        }
        try {
          const respuesta = await agregarProductor(formValues);
          setAlerta({error: false, msg:`${respuesta.msg}`})
          setFormValues({correo: '', password: '', nombre: ''})
          setTimeout(() => {
            setAlerta({error: false, msg:''})
          }, 2000);
        } catch (error) {
          setAlerta({error: true, msg:`${error.response.data.msg}`})
          setTimeout(() => {
            setAlerta({error: false, msg:''})
          }, 2000);
        }
      }
    return (
        <div id="EnvGlob">            
            <div>
            </div>
            <div>
                <table class="table" id="">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr> */}
                        {productores.length > 0 ? productores.map(({ID, NOMBRE, CORREO})=>(
                            <tr key={ID}>
                                <td>{ID}</td>
                                <td>{NOMBRE}</td>
                                <td>{CORREO}</td>
                                <td>
                                    <a>
                                        <i class="bi bi-pencil-square"></i>
                                    </a>
                                    <a>
                                        <i class="bi bi-x-octagon"></i>
                                    </a>
                                </td>                           
                            </tr>
                        )):'no hay'}
                        {/* </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
     );    
}
 
export default UserControlPage;
