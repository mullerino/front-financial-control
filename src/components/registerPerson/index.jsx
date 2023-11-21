import React, { useState } from 'react'
import {Form, Input, Modal, Radio } from 'antd'
import style from './style.module.css'

import {
  UserAddOutlined
} from '@ant-design/icons'


const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm()

  return (
    <Modal
      open={open}
      title="Cadastrar nova pessoa"
      okText="Cadastrar"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields()
            onCreate(values)
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          })
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'Caee',
        }}
      >
        <Form.Item
          name="Nome"
          label="Nome"
          rules={[
            {
              required: true,
              message: 'O nome é obrigatório!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="Email" label="Email">
          <Input type="email" />
        </Form.Item>
        <Form.Item name="Centro acadêmico" label="Centro acadêmico">
          <Radio.Group>
            <Radio value="Caee">CAee</Radio>
            <Radio value="Caeq">CAeq</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  )
}

const RegisterPerson = () => {  
  const [open, setOpen] = useState(false)

  const onCreate = (values) => {
    console.log('Received values of form: ', values)
    setOpen(false)
  }

  return (
    <div>
      <UserAddOutlined
        className={style.addPerson}
        onClick={() => {
          setOpen(true)
        }}
      />
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </div>
  )
}

export default RegisterPerson
