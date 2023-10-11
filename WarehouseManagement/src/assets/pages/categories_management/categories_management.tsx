
import { Tabs } from 'antd';
import { useFetchData } from '../../api/CategoriesManagementApi/CategoriesManagementApi';


const { TabPane } = Tabs;

function TabsComponent() {
  const { data, error, isLoading } = useFetchData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Tabs defaultActiveKey="1">
      {data.map((item, index) => (
        <TabPane tab={`Tab ${index + 1}`} key={String(index + 1)}>
          {item}
        </TabPane>
      ))}
    </Tabs>
  );
}

export default TabsComponent;
