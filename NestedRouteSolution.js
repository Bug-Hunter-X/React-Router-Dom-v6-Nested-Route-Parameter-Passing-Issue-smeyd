import { useParams } from 'react-router-dom';

function ParentRoute() {
  let { parentId } = useParams();
  return (
    <div>
      <h1>Parent Route: {parentId}</h1>
      <Routes>
        <Route path=':childId' element={<ChildRoute parentId={parentId}/>} />
      </Routes>
    </div>
  );
}

function ChildRoute({ parentId }) {
  let { childId } = useParams();
  return (
    <div>
      <h1>Child Route</h1>
      <p>Parent ID: {parentId}</p>
      <p>Child ID: {childId}</p>
    </div>
  );
}

export { ParentRoute, ChildRoute };