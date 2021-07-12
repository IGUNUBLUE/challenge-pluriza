const TypesMenu = ({ type, handleInputChange }) => {
   if (type === 'users') {
      return (
         <select
            name="type"
            className="select-types"
            onChange={(e) => handleInputChange(e)}
         >
            <option value="users" defaultValue>
               Users
            </option>
            <option value="repositories">Repositories</option>
         </select>
      );
   } else {
      return (
         <select
            name="type"
            className="select-types"
            onChange={(e) => handleInputChange(e)}
         >
            <option value="users">Users</option>
            <option value="repositories" defaultValue>
               Repositories
            </option>
         </select>
      );
   }
};

export default TypesMenu;
