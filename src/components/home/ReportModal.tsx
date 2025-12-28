import React, { useState } from 'react';

export default function ReportModal({ open, onClose }: any) {
  const [category, setCategory] = useState('misconduct');
  const [description, setDescription] = useState('');

  if (!open) return null;

  const submit = () => {
    // TODO: send to API with location context
    console.log('report', { category, description });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg p-4 w-full max-w-lg">
        <h3 className="font-semibold">Report / Escalate</h3>
        <div className="mt-3">
          <label className="text-sm">Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border rounded px-2 py-1 mt-1">
            <option value="misconduct">Misconduct</option>
            <option value="fraud">Fraud</option>
            <option value="safety">Safety concern</option>
          </select>
        </div>
        <div className="mt-3">
          <label className="text-sm">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border rounded px-2 py-1 mt-1" rows={4} />
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-2 border rounded">Cancel</button>
          <button onClick={submit} className="px-3 py-2 bg-red-600 text-white rounded">Submit</button>
        </div>
      </div>
    </div>
  );
}
