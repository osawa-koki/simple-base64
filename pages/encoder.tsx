import React, { useState } from "react";

import { Button, Alert, Form } from 'react-bootstrap';
import Layout from "../components/Layout";

export default function EncoderPage() {


  return (
    <Layout>
      <div id="Encoder">
        <h1>BASE64 Encoder</h1>
        <p>データをBASE64形式に変換します。</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>変換するデータ</Form.Label>
            <Form.Control as="textarea" rows={7} />
          </Form.Group>
          <Button variant="primary">
            変換
          </Button>
        </Form>
      </div>
    </Layout>
  );
};
