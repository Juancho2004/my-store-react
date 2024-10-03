import { Modal, Button } from 'antd';
import { useContexts } from '../../../Hooks/useContexts';

export function ProductId() {
  const {details, handleCloseModal, modalVisible} = useContexts();

  return (
    <Modal
      visible={modalVisible}
      onCancel={handleCloseModal}
      footer={null}
      centered
      bodyStyle={{ display: 'flex', flexDirection: 'row', padding: '20px' }}
    >
      {details && (
        <>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <img 
              alt={details.title} 
              src={details.image} 
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
          <div style={{ flex: 2 }}>
            <h2>{details.title}</h2>
            <p>{details.category}</p>
            <p>{details.description}</p>
            <h3 style={{ color: '#9c27b0' }}>${details.price}</h3>
            <Button type="primary" style={{ backgroundColor: '#9c27b0', borderColor: '#9c27b0', marginTop: '10px' }}>
             Add To Cart
            </Button>
          </div>
        </>
      )}
    </Modal>
  );
}
