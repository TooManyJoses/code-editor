import { useEffect } from 'react';
import CodeEditor from '../code-editor/code-editor';
import Preview from '../preview/preview';
import Resizable from '../resizable/resizable';
import { Cell } from './../../state';
import { useActions } from './../hooks/useActions';
import { useTypedSelector } from './../hooks/useTypedSelector';
import './code-cell.css';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles![cell.id]);

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cell.content);
      return;
    }
    const timer = setTimeout(async () => {
      createBundle(cell.id, cell.content);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cell.id, cell.content, createBundle]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: 'calc(100% - 5px)', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        <div className="preview-wrapper">
          {
            !bundle || bundle.loading
              ? <div className="progress-container">
                <progress className="progress is-small is-primary" max="100">
                  Loading
                </progress>
              </div>
              : <Preview code={bundle.code} err={bundle.err} />
          }
        </div>
      </div>
    </Resizable>
  );
};

export default CodeCell;
