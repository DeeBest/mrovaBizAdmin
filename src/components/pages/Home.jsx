import { Routes, Route } from 'react-router-dom';
import AddBusiness from './AddBusiness';
import BusinessesList from './BusinessesList';
import EditBusiness from './EditBusiness';
import ViewBusiness from './ViewBusiness';
import SignIn from './SignIn';

const Home = () => {
  return (
    <main>
      <div className="content-div home">
        <section className="admin-main-sec">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/add-business" element={<AddBusiness />} />
            <Route path="/businesses-list" element={<BusinessesList />} />
            <Route path="/edit-business/:id" element={<EditBusiness />} />
            <Route path="/view-business/:id" element={<ViewBusiness />} />
          </Routes>
        </section>
      </div>
    </main>
  );
};
export default Home;
