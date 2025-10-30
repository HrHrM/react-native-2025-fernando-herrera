import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const Switches = () => {

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });


  return (
    <>
      <ThemedView margin className='mt-2'>

        <ThemedCard>
          <ThemedSwitch
            text={`${state.isActive ? 'Active' : 'Inactive'}`}
            value={state.isActive}
            onValueChange={(value) => setState({ ...state, isActive: value })}
            className='mb-2 ml-2'
          />
          <ThemedSwitch
            text={`${state.isHungry ? 'Hungry' : 'Not Hungry'}`}
            value={state.isHungry}
            onValueChange={(value) => setState({ ...state, isHungry: value })}
            className='mb-2 ml-2'
          />
          <ThemedSwitch
            text={`${state.isHappy ? 'Happy' : 'Not Happy'}`}
            value={state.isHappy}
            onValueChange={(value) => setState({ ...state, isHappy: value })}
            className='mb-2 ml-2'
          />
        </ThemedCard>

      </ThemedView>
    </>
  );
};

export default Switches;
