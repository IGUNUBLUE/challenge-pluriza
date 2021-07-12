const TypesMenu = ({ type, handleInputChange }) => {
   let content;

   if (type === 'users') content = 'Users';
   else content = 'Repositories';

   return (
      <select
         name="type"
         className="select-types"
         onClick={(e) => {
            handleInputChange(e);
         }}
      >
         <option value={type} defaultValue>
            {content}
         </option>
         <option value="users">Users</option>
         <option value="repositories">Repositories</option>
      </select>
   );
};

export default TypesMenu;
