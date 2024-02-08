const handleClickv2 = () => {
    console.log(idArray);
  };

   const handleClick = () => {
     //este at me devuelve el utlimo elemento del array
     const { id } = table.at(-1);
     console.log("id del producto", id);
     DeleteItemTable(id, idArray);
   };


   const DeleteItemTable = (id, idArray) => {
     console.log(idArray)
     console.log("id que le llega al delete", id);
     const idDelete = idArray.indexOf(id);
     console.log("id que elimina el delete", idDelete);
     table.splice(idDelete, 1);
     setTable([...table])
   };


 useEffect(() => {
    const updateIdArray = () => {
      const newIdArray = table.map((items) => items.id);
      setIdArray(newIdArray);
    };

    updateIdArray();
  }, [table]);



  <TableBody items={Items}>
        {
          Items.map((item, index) => (
            <TableRow key={index}>
                {
                  Columns.map((column, index) => (
                    <TableCell key={index}>{console.log(column.key)}</TableCell>
                  ))
                }
                <TableCell>{item.nombre}</TableCell>
                <TableCell>{item.cantidad}</TableCell>
                <TableCell>{item.precio}</TableCell>
                <TableCell><FontAwesomeIcon icon={faTrash} className="table-row" onClick={() => {
                  setTable(Items.filter(a => a.id !== item.id))
                }}/>
                </TableCell>
            </TableRow>
          ))
        }
      </TableBody>